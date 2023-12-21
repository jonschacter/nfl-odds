const URLBASE: string = `https://site.api.espn.com/apis/site/v2/sports/football/nfl`;
import { ApiResponse, ApiTeam } from './custom_types/apiTypes';

function reformatRawApiTeamData(apiResponseTeams: ApiTeam[]) {
    // reformat the raw API data
}

async function fetchTeams() {
    const teamsUrl: string = URLBASE + '/teams';

    try {
        const response = await fetch(teamsUrl);
        const data: ApiResponse = await response.json();
        const teams = data.sports[0].leagues[0].teams;
        return teams;
    } catch (err) {
        console.error('Error:', err);
    }
}

(async function() {
    try {
        const rawApiTeams = await fetchTeams();
        if (!rawApiTeams) throw 'Error: Could not fetch from NFL API';
        const teams = reformatRawApiTeamData(rawApiTeams);
    } catch (err) {
        console.error('Error:', err);
    }
})();