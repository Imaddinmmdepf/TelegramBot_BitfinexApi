# Readme
Installation and getting started.
   
If you want to run this telegram bot, you just have to follow the steps I show you below:
  
1.If you don't have node in you system is required to install it. For the installation you have to access to the official page and download  the version of Node that you prefer.  https://nodejs.org/es/download/

2. The next step is to run  $ "npm install --save node-telegram-bot-api" in you console.
	Notice that Before version 5, NPM simply installed a package under node_modules by default. When you were trying to install 				dependencies for your app/module, you would need to first install them, and then add them (along with the appropriate version number)	     	 to the dependencies section of your package.json.
	The --save option instructed NPM to include the package inside of the dependencies section of your package.json automatically, thus                  	     saving you an additional step.

3. After the installation of telegram package, is needed to run  $ "npm install bitfinex-api-node". If you want more documentation
about this point you can access to: https://github.com/bitfinexcom/bitfinex-api-node
	
4. Notice that if you want to modify the code while your bot is running, you can install Nodemon, which provides more flexibilty for your code. The instruction require "-g" because you must do global in your system. $"npm install -g nodemon"
	
5. This is the final step, running your bot.# $ "node  telegram_bot.js" But, if you have installed and you want running nodemon, only run $ "nodemon telegram_bot.js" 	
