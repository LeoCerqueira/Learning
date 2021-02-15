function createSecretHolder(secret) {
	var arrayOfSecrets = ;

	return function getSecret(arg) {
		if (arg) {
			arrayOfSecrets.push(arg);
		} else {
			for (let i = 0; i < arrayOfSecrets.length; i++) {
				if (arg === arrayOfSecrets[i]) {
					return arrayOfSecrets[i];
				}
			}
		}
	};
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2
