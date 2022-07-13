export const filterByName = (options, name) => {
	try {
		const regEx = new RegExp(name, "i");
		return options.filter((option) => regEx.test(option));
	} catch (error) {
		console.warn("function filterByName", error);
		return options;
	}
};

export const mustBeRemovedBlur = (event) => {
	try {
		if (
			!event.relatedTarget ||
			!/notBlur/.test(event.relatedTarget.className)
		)
			return true;
		return false;
	} catch (error) {
		console.warn("function mustBeRemovedBlur", error);
		return false;
	}
};
