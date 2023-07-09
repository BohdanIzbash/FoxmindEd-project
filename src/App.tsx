import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { UserItemInfoPage, UserPage } from "./ui/users";
import { TodosPage } from "./ui/todos";
import { AppRoutes, Navigation } from "./ui/navigation";
import { PostsPage } from "./ui/posts";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path={AppRoutes.Users} element={<UserPage />} />
            <Route path={AppRoutes.UserInfo} element={<UserItemInfoPage />} />
            <Route path={AppRoutes.Todos} element={<TodosPage />} />
            <Route path={AppRoutes.Posts} element={<PostsPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
