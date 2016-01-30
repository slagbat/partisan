var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Partisan;
(function (Partisan) {
    var Components;
    (function (Components) {
        var PartisanApp = (function (_super) {
            __extends(PartisanApp, _super);
            function PartisanApp() {
                _super.call(this);
                this.showHowtoGetInvolved = function () {
                    return (React.createElement("div", null, React.createElement("h2", null, "How to get  involved  help"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "What we really need right now is people. We need your energy, enthusiasm and ideas to get this off the ground."), React.createElement("p", null, "Partisan will only work with your help, support and involvement. So please do get involved in any way you can."), React.createElement("h2", null, "Are you an individual who wants to join the collective?"), React.createElement("p", null, "Do you want to help set up the venue? Work in it? Do you have building or design skills? Do you have fundraising skills? Do you just want to help establish an alternative venue for culture and politics in Manchester? Let us ", React.createElement("a", {href: "#contact"}, "know"), "."), React.createElement("h2", null, "Are you a community group or political organisation?"), React.createElement("p", null, "Get in touch to tell us that you would like to become a User Group and use the space then ", React.createElement("a", {href: "#contact"}, "contact us"), ".")))));
                };
                this.showCafeBar = function () {
                    return (React.createElement("div", null, React.createElement("h2", null, "Café-bar"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "The space will include a cafe-bar area with regular opening hours. The cafe-bar will sell affordable alcoholic and non-alcoholic drinks, snacks and possibly hot food. It will also sell a selection of books from independent publishers (e.g. PM Press, Verso, Pluto etc) and house a Feminist Library (contributed by Feminist Fightback)."), React.createElement("p", null, "Although the space will not require that people within it consume food or drinks, the space as a whole will be supported by funds raised through the café-bar. So eating/drinking in it will be a way of showing solidarity and support and keeping the space running."), React.createElement("p", null, "The café-bar will be collectively and democratically owned and managed as a workers co-op."))), React.createElement("h2", null, "Socal space"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "The social space will include a flexible venue room that is separate to the cafe-bar. This space can be used by different individuals and groups for club nights and gigs, film screenings, fund raisers and meetings. The space will be freely available to non-profit and social justice groups, such as anti-cuts campaigners, migrant groups, queer collectives and others."), React.createElement("p", null, "Priority for the space will be given to community and political groups and arts organisations organized as collectives, with a commitment to progressive values.")))));
                };
                this.showHowAreWeOrganised = function () {
                    return (React.createElement("div", null, React.createElement("h2", null, "How are we organised?"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "Regulated Entertainment Collective (REC) is a workers’ co-operative who will collectively own the café-bar as workers’ co-operative and social enterprise, which funds the social space so that groups can use it for free. The social space will be co-run and owned by its members."), React.createElement("p", null, "The organisational structure of Partisan social space is a work in progress – much of the organisational structure remain up for discussion and will evolve as the experiment plays out. We will hold monthly Open House Get Together’s which are open to all users where we have the broader political discussions that affect the space, think about ways of working together and provide a means for new groups to come and check us out. Representation from each group who uses the space will mean that we can develop collective decision making, where users get a say in how the space is used.")))));
                };
                this.showInspiration = function () {
                    return (React.createElement("div", null, React.createElement("h2", null, "Inspiring venues"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "Partisan is inspired by other workers’ co-operatives, social spaces and independent or alternative venues. For some idea of where we’ve come from and where we are heading:"), React.createElement("ul", null, React.createElement("li", null, "The Common House - ", React.createElement("a", {href: "www.commonhouse.org.uk"}, "http://www.commonhouse.org.uk")), React.createElement("li", null, "Wharf Chambers - ", React.createElement("a", {href: "www.wharfchambers.org.uk"}, "http://www.wharfchambers.org.uk")), React.createElement("li", null, "DIY Space for London – ", React.createElement("a", {href: "http://diyspaceforlondon.org"}, "http://diyspaceforlondon.org"))))), React.createElement("h2", null, "Interesting and alternative spaces in Manchester"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "Please get in touch with us if you would like to connect with us and have your venue listed here.")))));
                };
                this.showContact = function () {
                    return (React.createElement("div", null, React.createElement("h2", null, "Contact"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "We would love to hear from you."), React.createElement("ul", null, React.createElement("li", null, "Email us: ", React.createElement("a", {href: "mailto:thepartisancollective@gmail.com "}, "thepartisancollective@gmail.com ")), React.createElement("li", null, "Follow us: ", React.createElement("a", {href: "https://www.facebook.com/partisancollective"}, "https://www.facebook.com/partisancollective")), React.createElement("li", null, "Tweet us: ", React.createElement("a", {href: "https://twitter.com/PartisanCollect"}, "https://twitter.com/PartisanCollect")))))));
                };
                this.showUserGroups = function () {
                    return (React.createElement("div", null, React.createElement("h2", null, "User groups"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "The following groups are involved in getting the space off the ground and will be user groups for various events and happenings:"), React.createElement("ul", null, React.createElement("li", null, "Arthouse"), React.createElement("li", null, "Feminist Fightback"), React.createElement("li", null, "Beefcake Charlie"), React.createElement("li", null, "Manchester and Salford Housing Action (MaSHA)")), React.createElement("p", null, "Please ", React.createElement("a", {href: "#contact"}, "contact us"), " if you would like to become a User Group.")))));
                };
            }
            PartisanApp.prototype.render = function () {
                return (React.createElement("div", null, React.createElement("img", {className: "center-block", src: "./assets/images/HeaderFactoryLogo.jpg"}), React.createElement("div", null, React.createElement("h2", null, "What is Partisan?"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "We want to create a space for independent, DIY, cultural and political activities in Manchester."), React.createElement("p", null, "We hope that it will be an organisational hub in Manchester, consisting primarily of two rooms – a café-bar and a flexible social space – hopefully with some outdoor space. The social space will be an events space which progressive groups and independent cultural groups can use for free for meetings, film screening, book launches, parties and gigs."), React.createElement("p", null, "Our main aim is to try to respond to feelings of exhaustion and disconnection in a context of austerity. Partisan can be a collective resource to bring groups together in Manchester and its central location will make it accessible to as wide a range of people as possible. We want the space to be accessible, child friendly and to be a space to socialize in without the pressure to consume or purchase food or drink"), React.createElement("p", null, "The space will complement existing ", React.createElement("a", {href: "#inspiration"}, "alternative spaces and social centres"), " creating a network of alternative spaces in the city."), React.createElement("p", null, "We hope that it will be an organisational hub in Manchester, consisting primarily of two rooms – a café-bar and a flexible social space – hopefully with some outdoor space. The social space will be an events space which progressive groups and independent cultural groups can use for free for meetings, film screening, book launches, parties and gigs."), React.createElement("p", null, "We need you - the space will be shaped by those who use it and will only happen with collective effort to get it off the ground. If you are a community group, progressive campaign or individual with an idea for an alternative event then ", React.createElement("a", {href: "#contact"}, "get in touch"), "."), React.createElement("h2", null, "Why is this important for Manchester?"), React.createElement("p", null, "Local community groups and campaigners (including us) know that there are few suitable places to meet in Manchester and hardly any for free. At Partisan, revenue generated by music events and the café-bar will subsidise the free use of the space."), React.createElement("ul", null, React.createElement("li", null, "We want to provide space for free, so that people can channel their energies into political action and organizing"), React.createElement("li", null, "We want to provide well-paid, sustainable work for people in the context of declining wages and low pay; the café-bar will (eventually) provide high quality work"), React.createElement("li", null, "Any future ‘profits’ will be directed to creating housing co-operatives, to provide good quality, secure housing in the city.")))))));
            };
            return PartisanApp;
        }(React.Component));
        Components.PartisanApp = PartisanApp;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
