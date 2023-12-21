interface ApiLink {
    language: string;
    rel: string[];
    href: string;
    text: string;
    shortText: string;
    isExternal: boolean;
    isPremium: boolean;
    isHidden: boolean;
}

interface ApiLogo {
    href: string;
    alt: string;
    rel: string[];
    width: number;
    height: number;
}

export interface ApiTeam {
    team: {
        id: string;
        uid: string;
        slug: string;
        abbreviation: string;
        displayName: string;
        shortDisplayName: string;
        name: string;
        nickname: string;
        location: string;
        color: string;
        alternateColor: string;
        isActive: boolean;
        isAllStar: boolean;
        logos: ApiLogo[];
        links: ApiLink[];
    }
}

interface ApiLeague {
    id: string;
    uid: string;
    name: string;
    abbreviation: string;
    shortName: string;
    slug: string;
    teams: ApiTeam[];
    year: number;
    season: {
        year: number;
        displayName: string;
    }
}

interface ApiSport {
    id: string;
    uid: string;
    name: string;
    slug: string;
    leagues: ApiLeague[];
}

export interface ApiResponse {
    sports: ApiSport[];
}