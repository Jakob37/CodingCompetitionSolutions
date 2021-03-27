for t in range(int(input())):
    currVel, targetVel, acc, dist = map(int, input().split())
    outcome = 'yes'

    if targetVel < currVel:
        minimumVel = (currVel ** 2 - 2 * acc * dist) ** 0.5
        if minimumVel > targetVel:
            outcome = 'no'
    print(outcome)
