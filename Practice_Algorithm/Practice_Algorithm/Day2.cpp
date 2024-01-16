#include "pch.h"

// �� �� ���ϱ�
void Compare()
{
    int a, b;
    cin >> a >> b;

    if (a < b)
        cout << "<" << endl;
    else if (a > b)
        cout << ">" << endl;
    else
        cout << "==" << endl;
}

// ���� ����
void Score()
{
    int score;
    cin >> score;

    if (score >= 90 && score <= 100)
        cout << "A" << endl;
    else if (score >= 80 && score < 90)
        cout << "B" << endl;
    else if (score >= 70 && score < 80)
        cout << "C" << endl;
    else if (score >= 60 && score < 70)
        cout << "D" << endl;
    else
        cout << "F" << endl;
}

// ����
bool Year()
{
    int year;
    cin >> year;
    return (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
}

// ��и�
void ��и�()
{
    int x, y;
    cin >> x;
    cin >> y;

    if (x >= 0 && y >= 0) {
        cout << 1 << endl;
        return;
    }
    else if (x < 0 && y >= 0) {
        cout << 2 << endl;
        return;
    }
    else if (x < 0 && y < 0) {
        cout << 3 << endl;
        return;
    }
    cout << 4 << endl;
}

// �˶� �ð�
void Alarm()
{
    int h, m;
    cin >> h >> m;

    if (m >= 45) {
        m -= 45;
    }
    else {
        if (h > 0) {
            h -= 1;
            m += 60 - 45;
        }
        else {
            h = 24;
            h -= 1;
            m += 60 - 45;
        }
    }

    cout << h << " " << m << endl;
}

// ���� ����
void OvenTime()
{
    int h, m, am;
    cin >> h >> m;
    cin >> am;

    m += am;

    while (m >= 60) {
        h += 1;
        if (h == 24)
            h = 0;
        m -= 60;
    }

    cout << h << " " << m << endl;
}

// �ֻ��� ����
void Dice()
{
    int dices[3];
    cin >> dices[0] >> dices[1] >> dices[2];
    if (dices[0] == dices[1] && dices[0] == dices[2] && dices[1] == dices[2]) {
        cout << 10000 + (dices[0] * 1000) << endl;
    }
    else {
        if (dices[0] == dices[1] && dices[0] != dices[2]) {
            cout << 1000 + (dices[0] * 100) << endl;
        }
        else if (dices[0] == dices[2] && dices[1] != dices[2]) {
            cout << 1000 + (dices[0] * 100) << endl;
        }
        else if (dices[1] == dices[2] && dices[0] != dices[1]) {
            cout << 1000 + (dices[1] * 100) << endl;
        }
        else if (dices[0] != dices[1] && dices[1] != dices[2]) {
            cout << max(max(dices[0], dices[1]), dices[2]) * 100 << endl;
        }
    }
}

int main()
{
    Dice();
}