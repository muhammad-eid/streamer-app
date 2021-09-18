import { BrowserRouter, Route } from "react-router-dom";
import streamList from "./streamList";
import streamShow from "./streamShow";
import streamCraete from "./streamCreate";
import streamEdit from "./streamEdit";
import streamDelete from "./streamDelete";
import Header from "./stremerHeader";

const browserRouter = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route component={Header} /> {/*search for best practice */}
        <Route path="/" exact component={streamList} />
        <Route path="/stream/show" exact component={streamShow} />
        <Route path="/stream/craete" exact component={streamCraete} />
        <Route path="/stream/edit" exact component={streamEdit} />
        <Route path="/stream/delete" exact component={streamDelete} />
      </BrowserRouter>
    </div>
  );
};

export default browserRouter;
