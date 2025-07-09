
interface MajorCredits {
    credits: number
    _brand: "major"
}
interface  MinorCredits{
    credits: number
    _brand: "minor"
}
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) : MajorCredits {
    let sum = subject1.credits + subject2.credits
    return {
        credits: sum,
        _brand: "major"
    }
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) : MinorCredits {
    let sum = subject1.credits + subject2.credits
    return {
        credits: sum,
        _brand: "minor"
    }
}