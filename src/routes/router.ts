import{ Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
    res.send("hoññ");
});

router.get('/lna', (_req, res) => {
    res.send("hssssss");
});

router.get('/bloc', (_req, res) => {
    res.send("welcome");
});

export default router