using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ControlsAndScaffoldingTemplates.Startup))]
namespace ControlsAndScaffoldingTemplates
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
