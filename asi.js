/**
 * @fileoverview "ARENA Standard Interface (ASI)";
 *
 * Copyright (C) Wiselab CMU.
 * @date April, 2020
 */

export default class ARENASystemInterface {

	getImports() {
		return this.asiImport;
	}

	asiImport = {
		args_get: (argv, argvBuf) => {
		this.refreshMemory();
		let coffset = argv;
		let offset = argvBuf;
		args.forEach(a => {
			this.view.setUint32(coffset, offset, true);
			coffset += 4;
			offset += Buffer.from(this.memory.buffer).write(`${a}\0`, offset);
		});
		return WASI_ESUCCESS;
		}
	}
}
