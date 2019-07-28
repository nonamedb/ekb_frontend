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
            this.setPredictions(res.data.data);
            this.loadingEnd();
        } catch (e) {
            console.log(e);
        }
    }

    @Action
    public async postNewData(data: IBarData[]): Promise<void> {
        try {
            this.loadingStart();
            const formedData: any = {};
            data.forEach((item) => {
                formedData[item.abbr] = item.students;
            });

            const formData = new FormData();
            console.log(formedData);
            formData.append('data', JSON.stringify(formedData));
            const res = await http.post('prediction/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(res);
            this.setPredictions(res.data.data);
            this.loadingEnd();
        } catch (e) {
            this.loadingEnd();
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
