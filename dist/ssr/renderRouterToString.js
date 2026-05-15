import { render } from 'svelte/server';
import RouterServer from './RouterServer.svelte';
export const renderRouterToString = ({ router, responseHeaders, children, }) => {
    try {
        const RootComponent = (children ? RouterServer : RouterServer);
        const { head, html } = render(RootComponent, { props: { router } });
        router.serverSsr.setRenderFinished();
        let body = `<!DOCTYPE html><html><head>${head}</head><body>${html}`;
        const injectedHtml = router.serverSsr.takeBufferedHtml();
        if (injectedHtml) {
            body += injectedHtml;
        }
        body += '</body></html>';
        return new Response(body, {
            status: router.stores.statusCode.get(),
            headers: responseHeaders,
        });
    }
    catch (error) {
        console.error('Render to string error:', error);
        return new Response('Internal Server Error', {
            status: 500,
            headers: responseHeaders,
        });
    }
    finally {
        router.serverSsr?.cleanup();
    }
};
