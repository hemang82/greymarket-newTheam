// dateFormats.js
export const DateFormats = {
    DATE_DD_MM_YYYY: "DD-MM-YYYY",                // 12-06-2024
    DATE_DD_MMM: "D MMM",                         // 12 Jun
    DATE_DD_MMM_YYYY: "DD MMM YYYY",              // 12 Jun 2024
    DATE_DD_SLASH_MM_SLASH_YYYY: "DD/MM/YYYY",    // 12/06/2024
    DATE_DD_SLASH_MM_SLASH_YYYY_TIME: "DD/MM/YYYY h:mm A", // 12/06/2024 3:45 PM
    DATE_DD_MMM_YYYY_TIME_24H: "DD MMM YYYY, HH:mm",    // 12 Jun 2024, 15:45
    DATE_DD_MMM_YYYY_TIME: "DD MMM YYYY, hh:mm A",         // 12 Jun 2024, 03:45 PM
    DATE_MMM_DD_YYYY_TIME: "MMM DD YYYY, hh:mm A",         // Jun 12 2024, 03:45 PM
    DATE_D_M_YYYY_TIME: "D-M-YYYY h:mm A",                 // 12-6-2024 3:45 PM
    DATE_ISO_LOCAL: "YYYY-MM-DD",                          // 2024-06-12
    DATE_DOT_FORMAT: "DD.MM.YYYY H:mm",                    // 12.06.2024 15:45
    DATE_DAY_MONTH_NAME: "ddd, MMMM DD",                   // Wed, June 12
};

export const TimeFormats = {
    TIME_12_HOUR: "hh:mm A",                 // 06:43 PM
    TIME_24_HOUR: "HH:mm",                   // 18:43
    TIME_12_HOUR_WITH_SECONDS: "hh:mm:ss A", // 06:43:54 PM
    TIME_24_HOUR_WITH_SECONDS: "HH:mm:ss",   // 18:43:54
    DATE_SHORT: "MM/DD/YYYY",                // 07/02/2024
    DATE_LONG: "MMMM D, YYYY",               // July 2, 2024
    DATETIME_12_HOUR: "MMMM D, YYYY h:mm A", // July 2, 2024 6:43 PM
    DATETIME_24_HOUR: "MMMM D, YYYY HH:mm",  // July 2, 2024 18:43
    FULL_DATETIME_12_HOUR: "dddd, MMMM D, YYYY h:mm A", // Tuesday, July 2, 2024 6:43 PM
    FULL_DATETIME_24_HOUR: "dddd, MMMM D, YYYY HH:mm",  // Tuesday, July 2, 2024 18:43
};

export const CODES = {
    SUCCESS: 200,
    VALIDATION_ERROR: 400,
    ACCESS_TOKEN_EXPIRE: 403,
    INACTIVE: 423,
    NOT_FOUND: 404,
    ERROR: 550,
    INTERNAL_ERROR: 500,
    UNAUTHORIZED: 401,
    REFRESH_TOKEN_EXPIRED: 410,
    CREATED: 201
};

export const USER_ROLES = {
    AGENT: 'sub_admin',
    ADMIN: 'admin',
};

export const STORAGE_KEYS = {
    LOGIN_KEY: "GMI_is_login",
    AUTH_KEY: 'GMI_auth',
    ACCESS_TOKEN_KEY: 'GMI_access_token',
    REFRESH_TOKEN_KEY: 'GMI_refresh_token',
    LANGUAGE_KEY: 'GMI_language',
    ROLE_KEY: 'GMI_role',
    THEME_KEY: 'GMI_theme',
}

export const AWS_FOLDER = {
    PROFILE_IMAGE: 'profile_image',
}