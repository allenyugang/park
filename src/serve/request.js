import { service} from '../utils/app';
export default function request(url, options = {},serveType,) {
  options.url = url;     
  if(serveType == "java"){
    return service(options).then(parse);
  }
}
function parse(response) {
    let result = response && response.data;
    return result;
}
