/**
 * High-level reader interface
 *
 * @public
 * @unrestricted
 *
 */
class DiaryLoader {

    /**
     * @param {Function=} success_callback - called when a new file is loaded successfully
     * @param {Function=} error_callback - called when a file cannot be loaded
     *
     * @example
     * function my_success_callback( diary, source ) {
     *   console.log( "Loaded diary", diary, source );
     * }
     * function my_error_callback( raw, source ) {
     *   console.log( "Could not load diary", raw, source );
     * }
     * let loader = new DiaryLoader(my_success_callback,my_error_callback);
     */
    constructor( success_callback, error_callback ) {

        this["success_callback"] = success_callback || ( () => {} );
        this["error_callback"] = error_callback || ( () => {} );

        let load_interval, self = this;

        function initialise() {
            if ( window["tc"] ) {
                window.addEventListener('hashchange', () =>
                    location.hash.replace(
                        /(^|[?&])(sleep-diary=[^&]*)/g,
                        (_,diary) => self["load"]({
                            "file_format": "url",
                            "contents": diary
                        }, "hashchange" )
                    ),
                    false
                );
                location.hash.replace(
                    /(^#|[?&])(sleep-diary=[^&]*)/g,
                    (a,b,diary) => self["load"]({
                        "file_format": "url",
                        "contents": diary
                    }, "hash" )
                );
                clearInterval(load_interval);
            }
        }

        load_interval = setInterval( initialise, 100 );

        /*
         * TODO: localStorage
         * 1. decide which localStorage key(s) to examine
         * 2. decide how they will be encoded - URL encoded?  Base 64?
         * 3. do something like:
        const localStorage_key = "...";
        function process_localStorage(item) {
            process_diary(decode(item),...);
        }
        function check_storage_change(changes, area) {
            if ( area == "local" &&
                 changes.hasOwnProperty(localStorage_key) &&
                 changes[localStorage_key].hasOwnProperty("newValue")
               ) {
                process_localStorage(changes[localStorage_key].newValue);
            }
        }
        browser.storage.onChanged.addListener(check_storage_change);
        if ( localStorage.hasItem(localStorage_key) ) {
            process_localStorage(localStorage.getItem(localStorage_key));
        }
        */

        // Load other resources:
        try {
            [
                [
                    window["JSZip"],
                    "https://cdn.jsdelivr.net/npm/jszip@3.5.0/dist/jszip.min.js"
                ],
                [
                    window["tc"],
                    "https://cdn.jsdelivr.net/npm/tzdata@1.0.22/tzdata.js",
                    "https://cdn.jsdelivr.net/npm/timezonecomplete@5.11.2/dist/timezonecomplete.min.js"
                ],
                [
                    window["ExcelJS"],
                    "https://cdn.jsdelivr.net/npm/exceljs@4.2.0/dist/exceljs.min.js"
                ]
            ].forEach( resource => {
                if ( !resource[0] ) {
                    resource.slice(1).forEach( url => {
                        let script = document.createElement("script");
                        script.src = url;
                        document.head.appendChild(script);
                    });
                }
            });
        } catch (e) {}

    }

    /**
     * Load a sleep diary from some source
     * @param {Event|FileList|string|Object} raw - raw data to load
     * @param {(Event|FileList|string|Object)=} source - identifier passed to the callbacks
     *
     * @example
     * my_file_input.addEventListener( "change", event => diary_loader.load(event) );
     */
    ["load"](raw,source) {

        if ( !source ) source = raw;

        if ( raw.target && raw.target.files ) raw = raw.target.files;

        if ( raw.length ) { // looks array-like (e.g. FileList)

            Array.from(raw).forEach( file => {

                let file_reader = new FileReader(),
                    zip = new window["JSZip"]()
                ;

                // extract the file contents:
                file_reader.onload =
                    () => Spreadsheet["buffer_to_spreadsheet"](file_reader.result).then(

                        spreadsheet => this["load"]( spreadsheet, source ),

                        () => zip["loadAsync"](file_reader.result).then(

                            zip => {
                                // convert the zip file to an object containing file names and contents:
                                let files = {},
                                    keys = Object.keys(zip["files"]),
                                    next_key = () => {
                                        if ( keys.length ) {
                                            zip["file"](keys[0])["async"]("string").then(
                                                content => {
                                                    files[keys[0]] = content;
                                                    keys.shift();
                                                    next_key();
                                                });
                                        } else {
                                            this["load"](
                                                {
                                                    "file_format": "archive",
                                                    "contents": files,
                                                },
                                                source
                                            );
                                        }
                                    };
                                next_key();
                            },

                            () => {
                                // not a zip file - try processing it as plain text:
                                file_reader.onload = () => this["load"](
                                    {
                                        "file_format": "string",
                                        "contents"   : file_reader.result,
                                    },
                                    source
                                );
                                file_reader.readAsText(file);
                            }

                        )
                    );

                file_reader.readAsArrayBuffer(file);

            });

        } else {

            let diary;
            try {
                diary = window["new_sleep_diary"](
                    raw,
                    data => {
                        switch ( data["file_format"]() ) {
                        case "string":
                            return btoa(data["contents"]);
                        case "archive":
                            let zip = new window["JSZip"]();
                            Object.keys(data["contents"]).forEach(
                                filename => zip["file"](filename,data["contents"][filename])
                            )
                            return zip["generateAsync"]({"type": "base64", "compression": "DEFLATE"});
                        default:
                            throw Error("Unsupported output format: " + data["file_format"]());
                        }
                    }
                );
            } catch (e) {
                this[  "error_callback"]( raw  , source );
                throw e;
            }
            if ( diary ) {
                this["success_callback"]( diary, source );
            } else {
                this[  "error_callback"]( raw  , source );
            }

        }

    }

};
