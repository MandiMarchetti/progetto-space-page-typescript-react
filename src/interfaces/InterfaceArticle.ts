export interface InterfaceObject {
  count: number,
  next: string,
  previous: null,
  results: InterfaceArticle []
 }

 export interface InterfaceArticle {
  id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     any[];
    events:       any[];
}