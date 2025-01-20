import { Suspense, lazy} from "react";
import { Routes, Route} from "react-router-dom";


import Loading from './Loading'
const HomePage = lazy(() => import("./HomePageComponent"));
const CoursesPage = lazy(() => import("./CoursesPageComponent"));
const AssessmentPage = lazy(() => import("./AssessnmentPageComponent"));
const DiscussionPage = lazy(() => import("./DiscussionPageComponenet"));
const MorePage = lazy(() => import("./MorePageComponent"));
const ChapterWiseComponent = lazy(() => import("./ChapterWiseComponent"));

export default function ContentComponent() {

    return (
        <div className="pt-12">
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/CoursesPage" element={<CoursesPage />} />
                    <Route path="/AssessmentPage" element={<AssessmentPage />} />
                    <Route path="/DiscussionPage" element={<DiscussionPage />} />
                    <Route path="/MorePage" element={<MorePage />} />
                    <Route path="/CoursesPage/SpecificCourses" element={<ChapterWiseComponent />} />
                </Routes>
            </Suspense>
        </div>
    );
}

