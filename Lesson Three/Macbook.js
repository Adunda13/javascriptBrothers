const updateMacbook = (update) => { // creating an arrow function
    let main = document.querySelector("main");
    main.innerHTML = markup(Macbook);
    console.info(update);
};

const Macbook = {
    name:"MacBook Air",
    size: 13,
    color: "gray",
    apps: {
        vpn: "Nord VPN",
        media: "Apple TV",
        browser: "Chrome",
        designer: "Photoshop",
        textEditor: "Visual Studio Code"
    },
    lidOpen: false,
    toggleLid: function(lidStatus) {
        this.lidOpen = lidStatus;
    },
    newApps: function(appsVpn, appsMedia, appsBroswer, appsDesigner, appsTextEditor) {
        this.apps.vpn = appsVpn;
        this.apps.media = appsMedia;
        this.apps.browser = appsBroswer;
        this.apps.designer = appsDesigner;
        this.apps.textEditor = appsTextEditor;
    },
}
export default Macbook;