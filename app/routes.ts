import { type RouteConfig, index , route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("membros", "routes/membros.tsx"), 
  route("sobre-nos", "routes/aboutus.tsx"),
] satisfies RouteConfig;
