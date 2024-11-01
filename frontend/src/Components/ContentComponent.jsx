import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { HeaderButtonPathAtom } from "../Atoms/HeaderButtonPathAtom";

const HomePage = lazy(() => import("./HomePageComponent"));
const CoursesPage = lazy(() => import("./CoursesPageComponent"));
const AssessmentPage = lazy(() => import("./AssessnmentPageComponent"));
const DiscussionPage = lazy(() => import("./DiscussionPageComponenet"));
const MorePage = lazy(() => import("./MorePageComponent"));
const ChapterWiseComponent = lazy(() => import("./ChapterWiseComponent"));

export default function ContentComponent() {

    const path = useRecoilValue(HeaderButtonPathAtom);

    const navigate = useNavigate();
    useEffect(() => {
        navigate(path);
    }, [path]);

    return (
        <div className="pt-12">
            <Suspense fallback={<div>Loading .... </div>}>
                <Routes>
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/CoursesPage" element={<CoursesPage />} />
                    <Route path="/AssessmentPage" element={<AssessmentPage />} />
                    <Route path="/DiscussionPage" element={<DiscussionPage />} />
                    <Route path="/MorePage" element={<MorePage />} />
                    <Route path="/CoursesPage/ArtificialIntelligence" element={<ChapterWiseComponent />} />
                </Routes>
            </Suspense>
        </div>
    );
}

