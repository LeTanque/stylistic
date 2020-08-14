import React from "react";

const App = () => {
    return (
        <>
            <div id="custom-bg"></div>
            <div id="custom-bg-preview"></div>
            <div id="one-google"></div>

            <div id="ntp-contents">
                <div id="logo">
                    <div id="logo-default" title="Google"></div>
                    <div id="logo-non-white" title="Google"></div>
                    <div id="logo-doodle">
                        <div id="logo-doodle-container">
                            <div id="logo-doodle-wrapper">
                                <button id="logo-doodle-button">
                                    <img id="logo-doodle-image" tabIndex={-1}></img>
                                </button>
                            </div>
                        </div>
                        <iframe id="logo-doodle-iframe" scrolling="no"></iframe>
                    </div>
                </div>

                <div id="fakebox-container">
                    <div id="fakebox">
                        <div className="search-icon"></div>
                        <div id="fakebox-text"></div>
                        <input
                            id="fakebox-input"
                            autoComplete="off"
                            tabIndex={-1}
                            type="url"
                            aria-hidden={true}
                        />
                        <div id="fakebox-cursor"></div>
                    </div>
                </div>

                <div id="realbox-container" hidden>
                    <div id="realbox-input-wrapper">
                        <div id="realbox-icon" data-default-icon="search.svg"></div>
                        <input
                            id="realbox"
                            type="search"
                            autoComplete="off"
                            spellCheck="false /"
                            aria-live="polite"
                            autoFocus
                        />
                        <div id="realbox-matches"></div>
                    </div>
                </div>

                <div id="user-content">

                    <div id="most-visited">

                        <div id="mv-tiles"></div>
                    </div>
                </div>


                <div id="mv-notice-container">
                    <div id="mv-notice" className="notice-hide" role="alert">
                        <span id="mv-msg"></span>

                        <span id="mv-notice-links">
                            <span id="mv-undo" className="ripple" tabIndex={0} role="button"></span>
                            <span
                                id="mv-restore"
                                className="ripple"
                                tabIndex={0}
                                role="button"
                            ></span>
                        </span>
                    </div>
                </div>

                <div id="attribution">
                    <div id="attribution-text"></div>
                </div>

                <div id="error-notice-container">
                    <div id="error-notice" className="notice-hide" role="alert">
                        <span id="error-notice-icon"></span>
                        <span id="error-notice-msg"></span>
                        <span
                            id="error-notice-link"
                            className="ripple"
                            tabIndex={0}
                            role="button"
                        ></span>
                    </div>
                </div>

                <div id="edit-bg" tabIndex={0} role="button" hidden>
                    <div id="edit-bg-icon"></div>
                    <span id="edit-bg-text">Customize</span>
                </div>

                <div id="custom-bg-attr"></div>
            </div>

            <dialog id="edit-bg-dialog">
                <div id="edit-bg-menu">
                    <div id="edit-bg-title"></div>
                    <div id="edit-bg-default-wallpapers" className="bg-option" tabIndex={0}>
                        <div className="bg-option-img"></div>
                        <div id="edit-bg-default-wallpapers-text" className="bg-option-text"></div>
                    </div>
                    <div id="edit-bg-upload-image" className="bg-option" tabIndex={0}>
                        <div className="bg-option-img"></div>
                        <div id="edit-bg-upload-image-text" className="bg-option-text"></div>
                    </div>
                    <div id="edit-bg-divider"></div>
                    <div
                        id="custom-links-restore-default"
                        className="bg-option bg-option-disabled"
                        tabIndex={0}
                    >
                        <div className="bg-option-img"></div>
                        <div
                            id="custom-links-restore-default-text"
                            className="bg-option-text"
                        ></div>
                    </div>
                    <div
                        id="edit-bg-restore-default"
                        className="bg-option bg-option-disabled"
                        tabIndex={0}
                    >
                        <div className="bg-option-img"></div>
                        <div id="edit-bg-restore-default-text" className="bg-option-text"></div>
                    </div>
                </div>
            </dialog>

            <dialog id="ddlsd">
                <div id="ddlsd-title"></div>
                <button id="ddlsd-close"></button>
                <div id="ddlsd-content">
                    <button id="ddlsd-fbb" className="ddlsd-sbtn"></button>
                    <button id="ddlsd-twb" className="ddlsd-sbtn"></button>
                    <button id="ddlsd-emb" className="ddlsd-sbtn"></button>
                    <hr id="ddlsd-hr" />
                    <div id="ddlsd-link">
                        <span id="ddlsd-text-ctr">
                            <input type="text" id="ddlsd-text" dir="ltr" />
                        </span>
                        <button id="ddlsd-copy"></button>
                    </div>
                </div>
            </dialog>

            <dialog id="bg-sel-menu" className="customize-dialog">
                <div id="bg-sel-title-bar">
                    <div id="bg-sel-back-circle" tabIndex={0} role="button">
                        <div id="bg-sel-back"></div>
                    </div>
                    <div id="bg-sel-title"></div>
                </div>
                <div id="bg-sel-tiles" tabIndex={0}></div>
                <div id="bg-sel-footer">
                    <button
                        id="bg-sel-footer-cancel"
                        className="bg-sel-footer-button paper secondary ripple"
                        tabIndex={0}
                    ></button>
                    <button
                        id="bg-sel-footer-done"
                        className="bg-sel-footer-button paper primary ripple"
                        tabIndex={-1}
                    ></button>
                </div>
            </dialog>

            <dialog id="customization-menu" className="customize-dialog">
                <div id="menu-nav-panel" role="tablist" aria-label="Customize this page">
                    <button
                        id="backgrounds-button"
                        className="menu-option"
                        tabIndex={0}
                        role="tab"
                        aria-controls="backgrounds-menu backgrounds-image-menu"
                        aria-selected={true}
                        aria-labelledby="backgrounds-menu-option"
                        title="Background"
                    >
                        <div className="menu-option-icon-wrapper">
                            <div id="backgrounds-icon" className="menu-option-icon"></div>
                        </div>
                        <div id="backgrounds-menu-option" className="menu-option-label">
                            Background
                        </div>
                    </button>
                    <button
                        id="shortcuts-button"
                        className="menu-option"
                        tabIndex={0}
                        role="tab"
                        aria-controls="shortcuts-menu"
                        aria-selected={false}
                        aria-labelledby="shortcuts-menu-option"
                        title="Shortcuts"
                    >
                        <div className="menu-option-icon-wrapper">
                            <div id="shortcuts-icon" className="menu-option-icon"></div>
                        </div>
                        <div id="shortcuts-menu-option" className="menu-option-label">
                            Shortcuts
                        </div>
                    </button>
                    <button
                        id="colors-button"
                        className="menu-option"
                        tabIndex={0}
                        role="tab"
                        aria-controls="colors-menu"
                        aria-selected={false}
                        aria-labelledby="colors-menu-option"
                        title="Color and theme"
                    >
                        <div className="menu-option-icon-wrapper">
                            <div id="colors-icon" className="menu-option-icon"></div>
                        </div>
                        <div id="colors-menu-option" className="menu-option-label">
                            Color and theme
                        </div>
                    </button>
                </div>
                <div id="menu-contents">
                    <div id="menu-header">
                        <div
                            id="menu-back-circle"
                            tabIndex={0}
                            role="button"
                            aria-label="Back"
                            title="Back"
                        >
                            <div id="menu-back"></div>
                        </div>
                        <div id="menu-title">Customize this page</div>
                        <div id="refresh-daily-wrapper">
                            <div id="refresh-toggle-wrapper" title="Refresh daily">
                                <label className="switch">
                                    <input
                                        id="refresh-daily-toggle"
                                        type="checkbox"
                                        aria-labelledby="refresh-text"
                                    />
                                    <span className="toggle">
                                        <div className="knob"></div>
                                        <div className="highlight"></div>
                                    </span>
                                </label>
                            </div>
                            <div id="refresh-text">Refresh daily</div>
                        </div>
                    </div>
                    <div
                        id="backgrounds-menu"
                        className="menu-panel"
                        tabIndex={0}
                        role="tabpanel"
                        aria-label="Background"
                    >
                        <div id="backgrounds-upload" className="bg-sel-tile-bg">
                            <div
                                id="backgrounds-upload-icon"
                                className="bg-sel-tile"
                                tabIndex={-1}
                                role="button"
                                aria-label="Upload from device"
                                aria-pressed={false}
                                title="Upload from device"
                            >
                                <div id="backgrounds-upload-arrow"></div>
                                <div id="backgrounds-upload-text">Upload from device</div>
                            </div>
                        </div>
                        <div id="backgrounds-default" className="bg-sel-tile-bg">
                            <div
                                id="backgrounds-default-icon"
                                className="bg-sel-tile"
                                tabIndex={-1}
                                role="button"
                                aria-label="No background"
                                title="No background"
                                aria-pressed={false}
                            >
                                <div className="mini-page">
                                    <div className="mini-header-colorful"></div>
                                    <div className="mini-shortcuts"></div>
                                </div>
                            </div>
                            <div className="bg-sel-tile-title">No background</div>
                        </div>
                    </div>
                    <div
                        id="backgrounds-image-menu"
                        className="menu-panel"
                        tabIndex={0}
                        role="tabpanel"
                        aria-label="Background"
                    ></div>
                    <div
                        id="backgrounds-disabled-menu"
                        className="menu-panel"
                        tabIndex={0}
                        role="tabpanel"
                        aria-label="Background"
                    >
                        <div id="backgrounds-disabled-wrapper">
                            <div id="backgrounds-disabled-icon"></div>
                            <div id="backgrounds-disabled-title">
                                Custom backgrounds have been turned off by your administrator
                            </div>
                        </div>
                    </div>
                    <div
                        id="shortcuts-menu"
                        className="menu-panel"
                        tabIndex={0}
                        role="tabpanel"
                        aria-label="Shortcuts"
                    >
                        <div id="sh-options">
                            <div className="sh-option">
                                <div
                                    id="sh-option-cl"
                                    className="sh-option-image"
                                    tabIndex={-1}
                                    role="button"
                                    aria-pressed={false}
                                    aria-labelledby="sh-option-cl-title"
                                    title="My shortcuts"
                                >
                                    <div className="sh-option-icon"></div>
                                    <div className="sh-option-mini">
                                        <div className="mini-page">
                                            <div className="mini-header"></div>
                                            <div className="mini-shortcuts"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="sh-option-cl-title" className="sh-option-title">
                                    My shortcuts
                                </div>
                                Shortcuts are curated by you
                            </div>
                            <div className="sh-option">
                                <div
                                    id="sh-option-mv"
                                    className="sh-option-image"
                                    tabIndex={-1}
                                    role="button"
                                    aria-pressed={false}
                                    aria-labelledby="sh-option-mv-title"
                                    title="Most visited sites"
                                >
                                    <div className="sh-option-icon"></div>
                                    <div className="sh-option-mini">
                                        <div className="mini-page">
                                            <div className="mini-header"></div>
                                            <div className="mini-shortcuts"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="sh-option-mv-title" className="sh-option-title">
                                    Most visited sites
                                </div>
                                Shortcuts are suggested based on websites you visit often
                            </div>
                        </div>
                        <div id="sh-hide">
                            <div id="sh-hide-icon"></div>
                            <div>
                                <div id="sh-hide-title">Hide shortcuts</div>
                                Don&#39;t show shortcuts on this page
                            </div>
                            <div id="sh-hide-toggle-wrapper" title="Hide shortcuts">
                                <label className="switch">
                                    <input
                                        id="sh-hide-toggle"
                                        type="checkbox"
                                        tabIndex={-1}
                                        aria-labelledby="sh-hide-title"
                                    />
                                    <span className="toggle">
                                        <div className="knob"></div>
                                        <div className="highlight"></div>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div
                        id="colors-menu"
                        className="menu-panel"
                        tabIndex={0}
                        role="tabpanel"
                        aria-label="Color and theme"
                    >
                        <div id="colors-theme" tabIndex={0}>
                            <div id="colors-theme-icon"></div>
                            <div id="colors-theme-info">
                                <div id="colors-theme-name"></div>
                                Current theme you have installed
                            </div>
                            <a id="colors-theme-link" target="_blank">
                                <div id="colors-theme-link-icon"> </div>
                            </a>
                            <button id="colors-theme-uninstall" className="paper secondary">
                                Uninstall
                            </button>
                        </div>
                        <div id="color-picker-container" className="bg-sel-tile-bg">
                            <div
                                id="color-picker-tile"
                                className="bg-sel-tile"
                                tabIndex={-1}
                                aria-label="Select color"
                                title="Select color"
                                role="button"
                                aria-pressed={false}
                            >
                                <div id="left-semicircle"></div>
                                <div id="color-picker-icon"></div>
                                <input id="color-picker" type="color" style={{display:"none"}} />
                            </div>
                        </div>
                        <div id="colors-default" className="bg-sel-tile-bg">
                            <div
                                id="colors-default-icon"
                                className="bg-sel-tile"
                                tabIndex={-1}
                                aria-label="Default"
                                title="Default"
                                tabIndex={-1}
                                role="button"
                                aria-pressed={false}
                            ></div>
                        </div>
                    </div>
                </div>
                <div id="menu-footer">
                    <button
                        id="menu-cancel"
                        className="bg-sel-footer-button paper secondary ripple"
                        title="Cancel"
                    >
                        Cancel
                    </button>
                    <button
                        id="menu-done"
                        className="bg-sel-footer-button paper primary ripple"
                        title="Done"
                    >
                        Done
                    </button>
                </div>
            </dialog>

            <dialog id="voice-overlay-dialog" className="overlay-dialog">
                <div id="voice-overlay" className="overlay-hidden">
                    <button id="voice-close-button" className="close-button">
                        &times;
                    </button>
                    <div id="voice-outer" className="outer">
                        <div className="inner-container">
                            <div id="voice-button-container" className="button-container">
                                <span id="voice-level" className="level"></span>
                                <span id="voice-button" className="button">
                                    <div className="microphone">
                                        <span className="receiver"></span>
                                        <div className="wrapper">
                                            <span className="stem"></span>
                                            <span className="shell"></span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div id="text-container" aria-live="polite">
                                <span id="voice-text-i" className="voice-text"></span>
                                <span id="voice-text-f" className="voice-text"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
            <div id="screen-reader-announcer" role="status" aria-live="polite"></div>

            <div id="one-google-end-of-body"></div>

            
        </>
    );
};

export default App;
