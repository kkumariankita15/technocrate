export class DashboardData {
  year: string;
  roster: Roster[];
  classes: classSet[];
}

export class Roster {
  name: string;
  images: string;
}

export class classSet {
  subjects: string;
  total: string;
  score: number;
  grade: string;
  details: details[];
}

export class details {
  topic: string;
  value: string;
}
