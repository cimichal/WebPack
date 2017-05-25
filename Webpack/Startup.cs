using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Webpack.Startup))]
namespace Webpack
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
