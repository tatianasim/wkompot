import AppPage from './app.page';
import ClientComponent from "../components/client.component";

class ClientsPage extends AppPage {
    clientCreation = ClientComponent;

    get createClient() { return $('//button[span[.="Create Client"]]')}

    async deleteClient(email) {
        await browser.execute((addr)=> {
           client.$x(`//tr[.//a[.="${addr}"]]//span[contains(@class, "ant-dropdown-trigger")]/img`).click();
        }, email);

        // const options = $(`//tr[.//a[.="${email}"]]//span[contains(@class, "ant-dropdown-trigger")]/img`);
        // await options.click();
        const itemDelete = $('//span[f@class="ant-dropdown-menu-title-content"][.="Delete"]');
        await itemDelete.click();
    }

    async getItemByEmail(email) {
        return $(`//tr[.//a[.="${email}"]]`);
    }
}

export default new ClientsPage();