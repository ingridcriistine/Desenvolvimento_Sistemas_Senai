import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: user[] = [];
let nId = 0;

interface user {
    id: number,
    nome: string,
    sobrenome: string
}

router
    .post('/usuarios', (req: Request, res: Response) => {
        const user = req.body
        user.id = nId
        people.push(user)
        res.status(200).send(`Pessoa [${user.id}] ${user.nome} ${user.sobrenome} recebida com sucesso!`);
        nId = nId + 1;
    })

    .get('/usuarios', (req: Request, res: Response) => {
            res.status(200).send(people);
        }
    )

    .get('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const user = people.find(user => user.id === parseInt(id));
        if (user) {
            res.status(200).send(people[parseInt(id)]);
        }
        res.status(200).send("Pessoa não encontrada");
    })

    .put('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome, sobrenome } = req.body;

        res.status(200).send(`Pessoa com o id: ${id} foi atualizado para ${nome} ${sobrenome}`)
    })

    .patch('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome } = req.body;

        res.send(`Nome da pessoa com ID ${id} foi atualizado para: ${nome}`);
    })

    .delete('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params;

        res.status(200).send(`Pessoa com o id: ${id} foi deletada `)
    })

export default router;