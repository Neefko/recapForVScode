const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "recapcode" is now active!');
	const disposable = vscode.commands.registerCommand('recapcode.information', function () {
		vscode.window.showInformationMessage('Recap Code Extension v0.0.1\nCreated by Neefko & Delomoon');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
