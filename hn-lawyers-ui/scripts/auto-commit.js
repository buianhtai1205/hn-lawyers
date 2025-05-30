const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const executeCommand = (command) => {
    try {
        execSync(command, { stdio: 'inherit' });
        return true;
    } catch (error) {
        console.error(`Error executing command: ${command}`);
        console.error(error.message);
        return false;
    }
};

const automateCommit = async () => {
    try {
        // Run format
        console.log('🎨 Formatting code...');
        executeCommand('npm run format');

        // Get commit message
        const commitMessage = await new Promise((resolve) => {
            rl.question('✏️ Enter your commit message: ', (answer) => {
                resolve(answer);
            });
        });

        if (!commitMessage) {
            console.error('❌ Commit message cannot be empty');
            process.exit(1);
        }

        // Git operations
        console.log('📦 Adding files to git...');
        executeCommand('git add .');

        console.log('💾 Committing changes...');
        executeCommand(`git commit -m "${commitMessage}"`);

        console.log('🚀 Pushing to remote...');
        executeCommand('git push');

        console.log('✅ All done! Your changes have been committed and pushed.');
    } catch (error) {
        console.error('❌ An error occurred:', error);
        process.exit(1);
    } finally {
        rl.close();
    }
};

automateCommit();