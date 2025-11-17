import POST_checkin_Unknown from'./schemas/POST/checkin/Unknown.json' with { type: 'json' }
import POST_city_admin from'./schemas/POST/city/admin.json' with { type: 'json' }
import POST_game_admin from'./schemas/POST/game/admin.json' with { type: 'json' }
import POST_game_organizer from'./schemas/POST/game/organizer.json' with { type: 'json' }
import POST_game_registrations_export_admin from'./schemas/POST/game/registrations/export/admin.json' with { type: 'json' }
import POST_game_registrations_export_organizer from'./schemas/POST/game/registrations/export/organizer.json' with { type: 'json' }
import POST_registration_Unknown from'./schemas/POST/registration/Unknown.json' with { type: 'json' }
import POST_registration_mailing_admin from'./schemas/POST/registration/mailing/admin.json' with { type: 'json' }
import POST_registration_mailing_organizer from'./schemas/POST/registration/mailing/organizer.json' with { type: 'json' }
import POST_registrations_export_admin from'./schemas/POST/registrations/export/admin.json' with { type: 'json' }
import POST_registrations_export_organizer from'./schemas/POST/registrations/export/organizer.json' with { type: 'json' }
import POST_theme_admin from'./schemas/POST/theme/admin.json' with { type: 'json' }
import POST_user_admin from'./schemas/POST/user/admin.json' with { type: 'json' }
import POST_user_cities_admin from'./schemas/POST/user/cities/admin.json' with { type: 'json' }
import POST_user_password_admin from'./schemas/POST/user/password/admin.json' with { type: 'json' }
import POST_user_role_admin from'./schemas/POST/user/role/admin.json' with { type: 'json' }
import POST_venue_admin from'./schemas/POST/venue/admin.json' with { type: 'json' }
import POST_venue_organizer from'./schemas/POST/venue/organizer.json' with { type: 'json' }
import PATCH_city_admin from'./schemas/PATCH/city/admin.json' with { type: 'json' }
import PATCH_city_currency_admin from'./schemas/PATCH/city/currency/admin.json' with { type: 'json' }
import PATCH_city_timezone_admin from'./schemas/PATCH/city/timezone/admin.json' with { type: 'json' }
import PATCH_game_admin from'./schemas/PATCH/game/admin.json' with { type: 'json' }
import PATCH_game_organizer from'./schemas/PATCH/game/organizer.json' with { type: 'json' }
import PATCH_games_admin from'./schemas/PATCH/games/admin.json' with { type: 'json' }
import PATCH_games_organizer from'./schemas/PATCH/games/organizer.json' with { type: 'json' }
import PATCH_registration_admin from'./schemas/PATCH/registration/admin.json' with { type: 'json' }
import PATCH_registration_organizer from'./schemas/PATCH/registration/organizer.json' with { type: 'json' }
import PATCH_registration_Unknown from'./schemas/PATCH/registration/Unknown.json' with { type: 'json' }
import PATCH_registration_cancellation_Unknown from'./schemas/PATCH/registration/cancellation/Unknown.json' with { type: 'json' }
import PATCH_registration_channel_Unknown from'./schemas/PATCH/registration/channel/Unknown.json' with { type: 'json' }
import PATCH_registration_confirmation_Unknown from'./schemas/PATCH/registration/confirmation/Unknown.json' with { type: 'json' }
import PATCH_theme_admin from'./schemas/PATCH/theme/admin.json' with { type: 'json' }
import PATCH_user_admin from'./schemas/PATCH/user/admin.json' with { type: 'json' }
import PATCH_user_cities_admin from'./schemas/PATCH/user/cities/admin.json' with { type: 'json' }
import PATCH_user_password_admin from'./schemas/PATCH/user/password/admin.json' with { type: 'json' }
import PATCH_user_role_admin from'./schemas/PATCH/user/role/admin.json' with { type: 'json' }
import PATCH_users_cities_admin from'./schemas/PATCH/users/cities/admin.json' with { type: 'json' }
import PATCH_users_role_admin from'./schemas/PATCH/users/role/admin.json' with { type: 'json' }
import PATCH_venue_admin from'./schemas/PATCH/venue/admin.json' with { type: 'json' }
import PATCH_venue_organizer from'./schemas/PATCH/venue/organizer.json' with { type: 'json' }

export const Schema = Object.freeze({
	'POST/checkin/Unknown': POST_checkin_Unknown,
	'POST/city/admin': POST_city_admin,
	'POST/game/admin': POST_game_admin,
	'POST/game/organizer': POST_game_organizer,
	'POST/game/registrations/export/admin': POST_game_registrations_export_admin,
	'POST/game/registrations/export/organizer': POST_game_registrations_export_organizer,
	'POST/registration/Unknown': POST_registration_Unknown,
	'POST/registration/mailing/admin': POST_registration_mailing_admin,
	'POST/registration/mailing/organizer': POST_registration_mailing_organizer,
	'POST/registrations/export/admin': POST_registrations_export_admin,
	'POST/registrations/export/organizer': POST_registrations_export_organizer,
	'POST/theme/admin': POST_theme_admin,
	'POST/user/admin': POST_user_admin,
	'POST/user/cities/admin': POST_user_cities_admin,
	'POST/user/password/admin': POST_user_password_admin,
	'POST/user/role/admin': POST_user_role_admin,
	'POST/venue/admin': POST_venue_admin,
	'POST/venue/organizer': POST_venue_organizer,
	'PATCH/city/admin': PATCH_city_admin,
	'PATCH/city/currency/admin': PATCH_city_currency_admin,
	'PATCH/city/timezone/admin': PATCH_city_timezone_admin,
	'PATCH/game/admin': PATCH_game_admin,
	'PATCH/game/organizer': PATCH_game_organizer,
	'PATCH/games/admin': PATCH_games_admin,
	'PATCH/games/organizer': PATCH_games_organizer,
	'PATCH/registration/admin': PATCH_registration_admin,
	'PATCH/registration/organizer': PATCH_registration_organizer,
	'PATCH/registration/Unknown': PATCH_registration_Unknown,
	'PATCH/registration/cancellation/Unknown': PATCH_registration_cancellation_Unknown,
	'PATCH/registration/channel/Unknown': PATCH_registration_channel_Unknown,
	'PATCH/registration/confirmation/Unknown': PATCH_registration_confirmation_Unknown,
	'PATCH/theme/admin': PATCH_theme_admin,
	'PATCH/user/admin': PATCH_user_admin,
	'PATCH/user/cities/admin': PATCH_user_cities_admin,
	'PATCH/user/password/admin': PATCH_user_password_admin,
	'PATCH/user/role/admin': PATCH_user_role_admin,
	'PATCH/users/cities/admin': PATCH_users_cities_admin,
	'PATCH/users/role/admin': PATCH_users_role_admin,
	'PATCH/venue/admin': PATCH_venue_admin,
	'PATCH/venue/organizer': PATCH_venue_organizer,
})
