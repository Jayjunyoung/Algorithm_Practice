#include "pch.h"

// 구구단
void Multiple()
{
	int dan;
	cin >> dan;

	for (int i = 1; i <= 9; ++i)
		cout << dan << " * " << i << " = " << dan * i << endl;
}

// A + B - 3
void Sum()
{
	int Case;
	cin >> Case;
	vector<int> sums;
	for (int i = 0; i < Case; ++i) {
		int a, b;
		cin >> a >> b;
		sums.push_back(a + b);
	}

	for (int sum : sums) {
		cout << sum << endl;
	}
}

// 합
int Sum2(int n)
{
	static int sum{};
	if (n == 0)
		return sum;

	sum += n;
	
	return Sum2(n - 1);
}

// 영수증
void 영수증()
{
	int total, count;
	cin >> total;
	cin >> count;

	int sum{};
	for (int i = 0; i < count; ++i) {
		int won, n;
		cin >> won >> n;
		sum += won * n;
	}

	if (total == sum)
		cout << "Yes" << endl;
	else
		cout << "No" << endl;
}

// 코딩은 체육과목 입니다.
void PrintLong()
{
	int n;
	cin >> n;
	int count = n / 4;

	for (int i = 0; i < count; ++i)
		cout << "long ";
	cout << "int" << endl;
}

// 빠른 A + B
void FastSum()
{
	int count;
	
	cin.tie(NULL);
	std::ios_base::sync_with_stdio(false);

	cin >> count;
	vector<int> sums;
	for (int i = 0; i < count; ++i) {
		int a, b;
		cin >> a >> b;
		sums.push_back(a + b);
	}

	for (int sum : sums)
		cout << sum << '\n';
}

// A + B - 7
void Sum3()
{
	int count;

	cin.tie(NULL);
	std::ios_base::sync_with_stdio(false);

	cin >> count;
	vector<int> sums;
	for (int i = 0; i < count; ++i) {
		int a, b;
		cin >> a >> b;
		sums.push_back(a + b);
	}

	for (int i = 0; i < sums.size(); ++i)
		cout << "Case #" << i + 1 << ": " << sums[i] << '\n';
}

// A + B - 8
struct Number
{
	void SetNumber(int a, int b, int sum)
	{
		_a = a;
		_b = b;
		_sum = sum;
	}
	int _a{};
	int _b{};
	int _sum{};
};
void Sum4()
{
	int count;

	cin.tie(NULL);
	std::ios_base::sync_with_stdio(false);

	cin >> count;
	Number* numbers = new Number[count];
	for (int i = 0; i < count; ++i) {
		int a, b;
		cin >> a >> b;
		numbers[i].SetNumber(a, b, a + b);
	}

	for (int i = 0; i < count; ++i)
		cout << "Case #" << i + 1 << ": " << numbers[i]._a << " + " << numbers[i]._b << " = " << numbers[i]._sum << '\n';

	delete[] numbers;
}

// 별 찍기 - 1
void Star_1()
{
	int count;
	cin >> count;
	for (int i = 1; i <= count; ++i) {
		for (int j = 1; j <= i; ++j)
			cout << "*";
		cout << '\n';
	}
}

// 별 찍기 - 2
void Star_2()
{
	int count;
	cin >> count;
	for (int i = 1; i <= count; ++i) {
		for (int j = 1; j <= count - i; ++j)
			cout << " ";
		for (int k = 1; k <= i; ++k)
			cout << "*";
		cout << '\n';
	}
}

// A + B - 5
int* Resize(int* numbers, int size)
{
	int* sumarr = new int[size];

	for (int i = 0; i < size; ++i) {
		sumarr[i] = numbers[i];
	}
	delete[] numbers;

	return sumarr;
}

// A + B - 5
void Sum5()
{
	int a{ -1 }, b{ -1 };
	int count{};
	const int maxSize = 3;

	int* numbers = new int[maxSize];
	while (a !=0 && b != 0) {
		cin >> a >> b;
		count++;
		if (count > maxSize)
			numbers = Resize(numbers, count);
		numbers[count - 1] = a + b;
	}

	for (int i = 0; i < count - 1; ++i)
		cout << numbers[i] << endl;

	delete[] numbers;
}

// A + B - 4
void Sum6()
{
	int a{}, b{};
	vector<int> sums;
	while (!cin.eof()) {
		cin >> a >> b;
		if (!cin.eof())
			sums.push_back(a + b);
	}

	for (int sum : sums)
		cout << sum << endl;
}

int main()
{
	Sum6();
}