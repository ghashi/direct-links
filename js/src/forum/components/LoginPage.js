import RedirectToHomeAndOpenModalPage from './RedirectToHomeAndOpenModalPage';
import LogInModal from 'flarum/components/LogInModal';

export default class LoginPage extends RedirectToHomeAndOpenModalPage {
    createModal() {
        try {
            const params = m.route.param();
            console.log(`LoginPage -> createModal -> params`, params);
            const email = params.email
            console.log(`LoginPage -> createModal -> email`, email);
            const password = params.password
            console.log(`LoginPage -> createModal -> password`, password);
        } catch (error) {
            console.log(`LoginPage -> createModal -> error`, error);
        }
        return new LogInModal();
    }
}
