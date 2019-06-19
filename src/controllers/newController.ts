import model from '../models/newModel';
import { Request, Response } from 'express';

class NewCtrl {

    getNews = async (req: Request, res: Response) => {
        const noticias = await model.find();
        res.json(noticias);
    };

    getNew = async (req: Request, res: Response) => {

        const noticia = await model.findById(req.params.id)

        res.json(noticia);
    }

    createNew = async (req: Request, res: Response) => {
        const noticia = new model(req.body);
        await noticia.save();
        res.json({
            message: 'Noticia guardada'
        });
    };

    editNew = async (req: Request, res: Response) => {

        await model.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        res.json({
            message: 'Noticia modificada'
        });
    }

    removeNew = async (req: Request, res: Response) => {
        await model.findByIdAndDelete(req.params.id)
        res.json({
            message: 'Noticia eliminada.'
        })
    }
}

const newCtrl = new NewCtrl();

export default newCtrl;