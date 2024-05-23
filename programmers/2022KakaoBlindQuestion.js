function solution(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, () => 0);
  let report_map = new Map(); // 신고 명단
  id_list.forEach((id) => {
    report_map.set(id, []); // 신고 명단 초기화(각 id마다 빈 배열을 할당)
  });
  let report_count = new Map(); // 피신고자 누적 횟수
  let report_set = new Set(report); // 중복이 없어야함

  report_set.forEach((re) => {
    let [reporter, reported] = re.split(" ");
    // 신고 명단 작성
    report_map.set(reporter, [...report_map.get(reporter), reported]);
    // 피신고자 누적 횟수 계산
    if (report_count.has(reported))
      report_count.set(reported, report_count.get(reported) + 1);
    else report_count.set(reported, 1);
  });

  const reported_list = Array.from(report_map.values());

  report_count.forEach((value, key) => {
    if (value >= k) {
      reported_list.forEach((list, index) => {
        if (list.includes(key)) answer[index] = answer[index] + 1;
      });
    }
  });

  return answer;
}
