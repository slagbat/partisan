
namespace Partisan.Components {

  export class PartisanApp extends React.Component<IBasePageModel, IBaseAppState> {

    constructor() {
      super();
    }

    // public componentDidMount() {
    //   var setState = this.setState;
    //
    //   // we will configure the Router here
    //   // our router is provided by the
    //   // director npm module
    //   // the router observes changes in the URL and
    //   // triggers some component's event accordingly
    //   var router = Router({
    //     '/': setState.bind(this, {contentType:"whatispartisan"}),
    //     '/whatispartisan': setState.bind(this, {contentType:"whatispartisan"}),
    //     '/howtogetinvolved': setState.bind(this, {contentType:"howtogetinvolved"}),
    //     '/cafebar': setState.bind(this, {contentType:"cafebar"}),
    //     '/howareweorganised': setState.bind(this, {contentType:"howareweorganised"}),
    //     '/inspiration': setState.bind(this, {contentType:"inspiration"}),
    //     '/contact': setState.bind(this, {contentType:"contact"}),
    //     '/usergroups': setState.bind(this, {contentType:"usergroups"}),
    //     });
    //   router.init('/');
    // }

    private showUserGroups = () =>
    {
      return (
        <div>
          <h2>User groups</h2>
          <div className="row">
            <div className="col-xs-12">
              <p>The following groups are involved in getting the space off the ground and will be user groups for various events and happenings:</p>
              <ul>
                <li>Arthouse</li>
                <li>Feminist Fightback</li>
                <li>Beefcake Charlie</li>
                <li>Manchester and Salford Housing Action (MaSHA)</li>
              </ul>
              <p>Please <a href="#contact">contact us</a> if you would like to become a User Group.</p>
          </div>
        </div>
      </div>
      );
    }

    public render() {
      return (
              <div>
                <h2>What is Partisan?</h2>
                <div className="row">
                  <div className="col-xs-12">
                  <p>We want to create a space for independent, DIY, cultural and political activities in Manchester.</p>
                  <p>We hope that it will be an organisational hub in Manchester, consisting primarily of two rooms – a café-bar and a flexible social space – hopefully with some outdoor space. The social space will be an events space which progressive groups and independent cultural groups can use for free for meetings, film screening, book launches, parties and gigs.</p>
                  <p>Our main aim is to try to respond to feelings of exhaustion and disconnection in a context of austerity. Partisan can be a collective resource to bring groups together in Manchester and its central location will make it accessible to as wide a range of people as possible. We want the space to be accessible, child friendly and to be a space to socialize in without the pressure to consume or purchase food or drink</p>
                  <p>The space will complement existing <a href="#inspiration">alternative spaces and social centres</a> creating a network of alternative spaces in the city.</p>
                  <p>We need you - the space will be shaped by those who use it and will only happen with collective effort to get it off the ground. If you are a community group, progressive campaign or individual with an idea for an alternative event then <a href="#contact">get in touch</a>.</p>
                  <h2>Why is this important for Manchester?</h2>
                  <p>Local community groups and campaigners (including us) know that there are few suitable places to meet in Manchester and hardly any for free. At Partisan, revenue generated by music events and the café-bar will subsidise the free use of the space.</p>
                    <ul>
                      <li>We want to provide space for free, so that people can channel their energies into political action and organizing</li>
                      <li>We want to provide well-paid, sustainable work for people in the context of declining wages and low pay; the café-bar will (eventually) provide high quality work</li>
                      <li>Any future ‘profits’ will be directed to creating housing co-operatives, to provide good quality, secure housing in the city.</li>
                    </ul>
              </div>
            </div>
       </div>
     );
    }
  }
}
