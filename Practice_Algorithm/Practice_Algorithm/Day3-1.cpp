#include "pch.h"

// 개수 세기
void PrintNCount()
{
	int size;
	cin >> size;
	vector<int> v;

	for (int i = 0; i < size; ++i) {
		int num;
		cin >> num;
		v.push_back(num);
	}

	int findNum, count{};
	cin >> findNum;

	for (int i = 0; i < size; ++i) {
		if (v[i] == findNum)
			count++;
	}
	cout << count << endl;
}

// X보다 작은 수
void MinNum()
{
	int size, num;
	cin >> size >> num;
	int* arr = new int[size];

	for (int i = 0; i < size; ++i) {
		cin >> arr[i];
		if (arr[i] < num)
			cout << arr[i] << " ";
	}
	cout << '\n';

	delete[] arr;
}

// 최소, 최대
void MinAndMax()
{
	int size;
	cin >> size;
	int* arr = new int[size];

	int max{ INT_MIN };
	int min{ INT_MAX };
	for (int i = 0; i < size; ++i) {
		cin >> arr[i];
		max = std::max(max, arr[i]);
		min = std::min(min, arr[i]);
	}

	cout << min << " " << max << '\n';

	delete[] arr;
}

// 최댓값
void MaxPrint()
{
	const int size{ 9 };
	int arr[size]{};

	int max{ -1 };
	int index{ -1 };
	for (int i = 0; i < size; ++i) {
		cin >> arr[i];
		if (arr[i] > max) {
			max = arr[i];
			index = i + 1;
		}
	}

	cout << max << '\n';
	cout << index << '\n';
}

// 공 넣기
void PushBall()
{
	int size, count;
	cin >> size >> count;
	int* arr = new int[size] {};
	for (int i = 0; i < count; ++i) {
		int a, b, num;
		cin >> a >> b >> num;
		for (int j = a - 1; j <= b - 1; ++j)
			arr[j] = num;
	}

	for (int i = 0; i < size; ++i)
		cout << arr[i] << " ";
	cout << '\n';

	delete[] arr;
}

// 공 바꾸기
void ChangeBall()
{
	int size, count;
	cin >> size >> count;
	int* arr = new int[size];

	for (int i = 0; i < size; ++i)
		arr[i] = i + 1;

	for (int i = 0; i < count; ++i) {
		int a, b;
		cin >> a >> b;
		int temp{ arr[a - 1] };
		arr[a - 1] = arr[b - 1];
		arr[b - 1] = temp;
	}

	for (int i = 0; i < size; ++i)
		cout << arr[i] << " ";
	cout << '\n';

	delete[] arr;
}

// 과제 안 내신 분..?
void PrintStudent()
{
	const int SIZE{ 30 };
	bool arr[SIZE]{};

	for (int i = 0; i < SIZE; ++i)
		arr[i] = false;

	for (int i = 0; i < 28; ++i) {
		int index;
		cin >> index;
		arr[index - 1] = true;
	}

	for (int i = 0; i < SIZE; ++i)
		if (arr[i] == false)
			cout << i + 1 << '\n';
}

// 나머지
void Remainder()
{
	const int SIZE{ 42 };
	bool arr[SIZE]{};

	for (int i = 0; i < 10; ++i) {
		int num;
		cin >> num;
		int index{ (num % SIZE) };
		arr[index] = true;
	}
	
	int count{};
	for (int i = 0; i < SIZE; ++i)
		if (arr[i])
			count++;

	cout << count << '\n';
}

// 바구니 뒤집기
void Reverse()
{
	int size, count;
	cin >> size >> count;
	int* arr = new int[size];

	for (int i = 0; i < size; ++i)
		arr[i] = i + 1;

	for (int i = 0; i < count; ++i) {
		int a, b;
		cin >> a >> b;
		reverse(arr + a - 1, arr + b);
	}

	for (int i = 0; i < size; ++i)
		cout << arr[i] << " ";
	cout << '\n';

	delete[] arr;
}

// 평균
void Average()
{
	int size;
	cin >> size;
	double* arr = new double[size];

	double max{ -1 };
	for (int i = 0; i < size; ++i) {
		cin >> arr[i];
		max = std::max(max, arr[i]);
	}

	double sum{};
	for (int i = 0; i < size; ++i) {
		arr[i] = (arr[i] / max) * 100;
		sum += arr[i];
	}

	double average{ sum / size };
	cout << average << '\n';
}

int main()
{
	Average();
}