#include "pch.h"

// Hello World!
void Print_HelloWorld()
{
	cout << "Hello World!" << endl;
}

// A + B
int Plus()
{
	int a, b;
	cin >> a >> b;
	return a + b;
}

// A - B
int Minus()
{
	int a, b;
	cin >> a >> b;
	return a - b;
}

// A * B
int Multiply()
{
	int a, b;
	cin >> a >> b;
	return a * b;
}

// A / B
double Divide()
{
	int a, b;
	cin >> a >> b;
	if (a <= 0 || b >= 10)
		return -1;
	cout.precision(9);
	cout << fixed;
	return (static_cast<double>(a) / b);
}

// ��Ģ����
vector<int> ��Ģ����()
{
	int a, b;
	cin >> a >> b;
	vector<int> arr(5, -1);

	if (a < 1 || b > 10000)
		return arr;

	arr[0] = a + b;
	arr[1] = a - b;
	arr[2] = a * b;
	arr[3] = static_cast<double>(a) / b;
	arr[4] = a % b;
	return arr;
}

// ??!
void SearchID(vector<string>& ids)
{
	string name;
	cin >> name;
	if (name.size() > 50)
		return;

	ids.push_back(name);

	for (int i = 0; i < ids.size(); ++i) {
		if (ids[i] == name) {
			cout << name + "??!" << endl;
			return;
		}
	}
	cout << name << endl;
}

// �ұ⿬�� -> ���⿬��
int ���⿬��()
{
	int �ұ⿬��;
	cin >> �ұ⿬��;
	if (1000 > �ұ⿬�� || �ұ⿬�� >= 3000)
		return -1;
	return �ұ⿬�� - 543;
}

// ������
void ������()
{
	int a, b, c;
	cin >> a >> b >> c;
	if (a, b, c < 2 || a, b, c >10000)
		return;

	cout << (a + b) % c << endl;
	cout << (((a % c) + (b % c)) % c) << endl;
	cout << (a * b) % c << endl;
	cout << (((a % c) * (b % c)) % c) << endl;
}

// ����
void ����()
{
	int a, b;
	cin >> a;
	cin >> b;
	string bs = to_string(b);
	vector<string> multiplys(3);
	int result{ 0 };

	for (int i = 0; i < bs.size(); ++i) {
		int multiply = a * static_cast<int>(bs[bs.size() - i - 1] - '0');
		cout << multiply << endl;
		if (i == 1)
			multiplys[i] = to_string(multiply) + "0";
		else if (i == 2)
			multiplys[i] = to_string(multiply) + "00";
		else
			multiplys[i] = to_string(multiply);

		result += stoi(multiplys[i]);
	}
	
	cout << result << endl;
}

// ���� ����
size_t ��������()
{
	size_t llarr[3]{ 0 }, result{ 0 };
	cin >> llarr[0] >> llarr[1] >> llarr[2];
	
	return llarr[0] + llarr[1] + llarr[2];
}

// �����
void PrintCat()
{
	cout << "\\    \/\\" << endl;
	cout << " )  ( \')" << endl;
	cout << "(  /  )" << endl;
	cout << " \\(__)\|" << endl;
}

// ��
void PrintDog()
{
	cout << "\|\\_\/\|" << endl;
	cout << "\|q p\|   \/\}" << endl;
	cout << "( 0 )\"\"\"\\" << endl;
	cout << "\|\"\^\"\`    \|" << endl;
	cout << "\|\|_\/\=\\\\__\|" << endl;
}

int main()
{
	//PrintDog();
}