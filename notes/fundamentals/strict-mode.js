'use strict';

/**
 * use script has to be the very first statement in the script, though can have comments above
 * makes it easier to avoid accidental errors and bugs - forbids certain actions and creates visible errors in the developer console where in other situations javascript would just fail silently
 * also reserves a shortlist of variable names that might be defined in the language at a later point, to make sure your code won't break in future version of JS
 */