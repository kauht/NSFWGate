/**
     * @name NSFWGate
     * @author Kauht
     * @authorId 1066040094739398786
     * @description Restores access to age-gated content by removing Discord's age verification gate.
     * @version 1.0.1
     * @source https://github.com/kauht/NSFWGate
     * @updateUrl https://github.com/kauht/NSFWGate/raw/main/NSFWGate.plugin.js
*/
    module.exports = class Bypass {

        start() {

            // temp 
            setInterval(async () => {
              await patch()

            }, 5000);


            async function patch() {
                const UserStore = BdApi.findModuleByProps('getCurrentUser', 'getUser').getCurrentUser();
                UserStore.nsfwAllowed = true;

                if (UserStore.nsfwAllowed == false) {
                    UserStore.nsfwAllowed = true;
                }
            }

        }

        stop() {
            const UserStore = BdApi.findModuleByProps('getCurrentUser', 'getUser').getCurrentUser();
            UserStore.nsfwAllowed = false;


        };
}
