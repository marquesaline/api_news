import models from '../models/models';
import INews from '../interfaces/newsInterface';

class NewsServices {

    public async getAll() {
        const news = await models.find({});
        if(!news) {
            return false;
        }
        return news;
    }

    public async getById(_id: any) {
        const news = models.findById(_id);
        if(!news) {
            return false;
        }
        return news;
    }

    public async create(_news: INews) {
        const news = await models.create(_news);

        if(!news) {
            return false;
        }
        
        return news;
    }

    public async update(_id: any, _news: INews) {
        const news = await models.findByIdAndUpdate(_id, _news);

        if(!news) {
            return false;
        }

        return news;
    }

    public async delete(_id: any) {
        const news = await models.findByIdAndDelete(_id);
        if(!news) {
            return false;
        }
        return 'Excluído com sucesso';
    }
}

export default NewsServices;