using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SusiSu.Startup))]
namespace SusiSu
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
