package mz.djm.sflow.fe.flow;

import org.springframework.webflow.config.FlowDefinitionResource;
import org.springframework.webflow.config.FlowDefinitionResourceFactory;
import org.springframework.webflow.test.MockFlowBuilderContext;
import org.springframework.webflow.test.execution.AbstractXmlFlowExecutionTests;

/**
 * 
 * @author Danilo JO
 *
 */
public class AbstractGenericXmlFlowExecutionTests extends AbstractXmlFlowExecutionTests {

	
	
	@Override
	protected FlowDefinitionResource getResource(FlowDefinitionResourceFactory resourceFactory) {
		// TODO Auto-generated method stub
		return null;
	}
	/*
	 * If the flow has dependencies on externally managed services, also override #configureFlowBuilderContext
	 */
	@Override
	protected void configureFlowBuilderContext(MockFlowBuilderContext builderContext) {
		
		/*
		 * bean service dependencies builderContext.registerBean(authenticatingService,
		 * new StubBookingService());
		 */	
	}
	
	/*
	 * If your flow extends from another flow, or has states that extend other
	 * states, also override
	 */
	
	@Override
	protected FlowDefinitionResource[] getModelResources(FlowDefinitionResourceFactory resourceFactory) {
		
		return new FlowDefinitionResource[] {};//{resourceFactory.createFileResource("common-flow.xml")};
	}
}
