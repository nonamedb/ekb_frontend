import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store/store';
import { IBarData } from '../types';
import { http } from '@/http';

@Module({ name: 'app', store, dynamic: true })
class App extends VuexModule {
    public predictions: IBarData[] = [];
    public loading: boolean = false;

    @Action
    public async getPredictions(): Promise<void> {
        try {
            this.loadingStart();
            const res = await http.get('prediction/');
            console.log(res);
            this.setPredictions(res);
            this.loadingEnd();
        } catch (e) {
            console.log(e);
        }
    }

    @Mutation
    private setPredictions(predictions: IBarData[]): void {
        this.predictions = predictions;
    }

    @Mutation
    private loadingStart(): void {
        this.loading = true;
    }

    @Mutation
    private loadingEnd(): void {
        this.loading = false;
    }
}

export const AppModule = getModule(App);
