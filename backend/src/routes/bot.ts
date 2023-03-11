import { Router } from '../server'
import { Bot, BotSettings, BotSettingsUpdate } from '../controllers/bot'
import { isAuthorizated } from '../middleware/isAuthorizated'

const router = Router()

router.get('/bot', isAuthorizated, Bot)
router.get('/bot/settings', isAuthorizated, BotSettings)
router.put('/bot/settings/update', isAuthorizated, BotSettingsUpdate)

export default router