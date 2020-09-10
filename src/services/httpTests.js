import http from './httpServices';
export function httpRtestGet() {
    return http.get('http://localhost:8000/api/test/rtest');
}
