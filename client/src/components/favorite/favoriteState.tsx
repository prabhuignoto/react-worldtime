import { Container } from "unstated";
import Store from "store";
import { remove } from "lodash";

export default class FavoriteState extends Container<{ favorites: string[] }> {
  constructor() {
    super();
    this.state = {
      favorites: Store.get("react-worldtime") || []
    };
  }

  addFavorite(timezone: string, cb?: () => void) {
    let timezones = this.state.favorites;
    timezones.push(timezone);
    this.setState(
      {
        favorites: timezones.slice(0)
      },
      cb
    );
    Store.set("react-worldtime", timezones);
  }

  removeFavorite(timezone: string, cb?: () => void) {
    let timezones = this.state.favorites;
    remove(timezones, x => x === timezone);
    this.setState(
      {
        favorites: timezones
      },
      cb
    );
    Store.set("react-worldtime", timezones);
  }
}
