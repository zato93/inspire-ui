module.exports = {
	register(modules){
		Object.keys(modules).map(moduleName=>{
			this[moduleName] = modules[moduleName];
		});
	}
};