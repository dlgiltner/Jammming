# Jammming
**Capstone project for Codecademy**

Jammming is the final project for front-end web development in Codecademy. The initial version allows a user to search Spotify, create a new playlist, and save the playlist to Spotify. In future versions, additional functionality will be added along with documentation for each feature request.

**Known Issues**

The first search performed on each visit to Jammming appears to only cause the page to reload. This behavior is caused by the app checking to see if the user is logged into Spotify. If they are not, they will be redirected to log in. If they are, the page simply refreshes as the app obtains the user's access token. 
