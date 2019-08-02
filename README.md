<h2>Create express app</h2>
<ul>
<li>npm init</li>
<li>Accept default values by hitting enter</li>
<li>npm install --save express</li>
<li>Route file will be called "index.js"</li>
</ul>

<h2>Deploy on Heroku</h2>
<ol>
<li>Heroku will expose a particular port we need to use, we need make to sure we're listening on that port. That is defined in the index file.</li>
<li>Sepecify Node environment, that is done in package.json "engines" key.</li>
<li>Sepecify start script: package.json "scripts" key.</li>
<li>Create .gitignore file</li>
<li>Download Heroku CLI</li>
</ol>

<h2>Deployment info</h2>
<ul>
<li><b>App config:</b>https://dashboard.heroku.com/apps/fullstack-luis</li>
<li><b>Back-end URL: </b>https://fullstack-luis.herokuapp.com/</li>
<li><b>Source code: </b>https://github.com/larguijo/fullstack-react</li>
</ul>

<h2>Oath</h2>
<p>We install at least to libraries to handle authentication:</p>
<ul>
<li>Base passport library</li>
<li>One passport strategy per authentication method (Google, Facebook, etc.). http://www.passportjs.org/packages/</li>
</ul>

<h2>Mongo Instance on Atlas</h2>
<p>To see Mongo's Cloud Instance, go to https://cloud.mongodb.com/v2#/clusters</p>

<h2>Login Flow<h2>
<ul>
<li>server/auth/google</li>
<li>server/api/current_user</li>
<li></li>
</ul>
