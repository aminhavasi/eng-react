import http from './httpServices';
export function httpRtestGet() {
    return http.get('http://localhost:8000/api/tests/rtest');
}
export function httpTest(data) {
    return http.post('http://localhost:8000/api/tests/rtest/rtest', data);
}
