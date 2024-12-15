import { Router } from 'express'
import multer from 'multer'


const router = Router();

router.get('/server', (req, res) => {
  res.json({ message: 'Rota /server funcionando!' });
});

export { router }
